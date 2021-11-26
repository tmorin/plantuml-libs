# Svg


```text
simpleicons-5/S/Svg
```

```text
include('simpleicons-5/S/Svg')
```



| Illustration | Svg |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Svg.png) | ![illustration for Svg](../../simpleicons-5/S/Svg.Local.png) |




## Svg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Svg
include('simpleicons-5/S/Svg')

' renders the element
Svg('Svg', 'Svg', 'an optional tech label')
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

' loads the Item which embeds the element Svg
include('simpleicons-5/S/Svg')

' renders the element
Svg('Svg', 'Svg', 'an optional tech label')
@enduml
```

