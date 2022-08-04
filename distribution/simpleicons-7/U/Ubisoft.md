# Ubisoft


```text
simpleicons-7/U/Ubisoft
```

```text
include('simpleicons-7/U/Ubisoft')
```



| Illustration | Ubisoft |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/U/Ubisoft.png) | ![illustration for Ubisoft](../../simpleicons-7/U/Ubisoft.Local.png) |




## Ubisoft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Ubisoft
include('simpleicons-7/U/Ubisoft')

' renders the element
Ubisoft('Ubisoft', 'Ubisoft', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ubisoft
include('simpleicons-7/U/Ubisoft')

' renders the element
Ubisoft('Ubisoft', 'Ubisoft', 'an optional tech label', 'an optional description')
@enduml
```

