# Themighty


```text
simpleicons-7/T/Themighty
```

```text
include('simpleicons-7/T/Themighty')
```



| Illustration | Themighty |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Themighty.png) | ![illustration for Themighty](../../simpleicons-7/T/Themighty.Local.png) |




## Themighty

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Themighty
include('simpleicons-7/T/Themighty')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Themighty
include('simpleicons-7/T/Themighty')

' renders the element
Themighty('Themighty', 'Themighty', 'an optional tech label')
@enduml
```

