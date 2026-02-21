# Functions


```text
material/Editor/Functions
```

```text
include('material/Editor/Functions')
```



| Illustration | Functions |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/Functions.png) | ![illustration for Functions](../../material/Editor/Functions.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FunctionsXs>`
- `<$FunctionsSm>`
- `<$FunctionsMd>`
- `<$FunctionsLg>`





## Functions

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Functions
include('material/Editor/Functions')

' renders the element
Functions('Functions', 'Functions', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Functions
include('material/Editor/Functions')

' renders the element
Functions('Functions', 'Functions', 'an optional tech label', 'an optional description')
@enduml
```

