# Windowsxp


```text
simpleicons-7/W/Windowsxp
```

```text
include('simpleicons-7/W/Windowsxp')
```



| Illustration | Windowsxp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/W/Windowsxp.png) | ![illustration for Windowsxp](../../simpleicons-7/W/Windowsxp.Local.png) |




## Windowsxp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Windowsxp
include('simpleicons-7/W/Windowsxp')

' renders the element
Windowsxp('Windowsxp', 'Windowsxp', 'an optional tech label')
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

' loads the Item which embeds the element Windowsxp
include('simpleicons-7/W/Windowsxp')

' renders the element
Windowsxp('Windowsxp', 'Windowsxp', 'an optional tech label')
@enduml
```

