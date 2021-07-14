# Themighty


```text
simpleicons-5/T/Themighty
```

```text
include('simpleicons-5/T/Themighty')
```



| Illustration | Themighty |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Themighty.png) | ![illustration for Themighty](../../simpleicons-5/T/Themighty.Local.png) |




## Themighty

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Themighty
include('simpleicons-5/T/Themighty')

' renders the element
Themighty('Themighty', 'Themighty', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Themighty
include('simpleicons-5/T/Themighty')

' renders the element
Themighty('Themighty', 'Themighty', 'an optional tech label')
@enduml
```

