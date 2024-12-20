# App Structure


## Main Structure:
- app/(home)/page.tsx is your main entry point
    - It likely handles responsive rendering between Mobile and Desktop components
- Responsive Components:
    - MobileComponent.tsx - Renders on mobile devices
    - DesktopComponent.tsx - Renders on desktop devices
- Authentication Flow:
    - login/page.tsx - Login page container
    - LogIn.component.tsx - Contains login form and authentication logic
    - authed/page.tsx - Protected page for authenticated users


```mermaid

flowchart TD
    %% Main Pages
    Home[("(home)/page.tsx")]
    Login[("login/page.tsx")]
    Authed[("authed/page.tsx")]
    
    %% Components
    Mobile["MobileComponent"]
    Desktop["DesktopComponent"]
    LoginComp["LogIn.component.tsx"]
    
    %% States
    AuthContext{{"AuthContext"}}
    DeviceContext{{"DeviceContext"}}
    
    %% File Structure
    Home --> Mobile
    Home --> Desktop
    Login --> LoginComp
    
    %% Auth Flow
    AuthContext --> Home
    Home -->|"not authenticated"| Login
    LoginComp -->|"login success"| AuthContext
    AuthContext -->|"authenticated"| Authed
    
    %% Responsive Logic
    DeviceContext -->|"mobile"| Mobile
    DeviceContext -->|"desktop"| Desktop
    
    %% Styling
    classDef page fill:#f9d6fe,stroke:#9c27b0,stroke-width:2px
    classDef component fill:#bbdefb,stroke:#1976d2,stroke-width:2px
    classDef protected fill:#ffcdd2,stroke:#d32f2f,stroke-width:2px
    classDef context fill:#c8e6c9,stroke:#388e3c,stroke-width:2px
    
    %% Apply styles
    class Home,Login page
    class Authed protected
    class Mobile,Desktop,LoginComp component
    class AuthContext,DeviceContext context

```

