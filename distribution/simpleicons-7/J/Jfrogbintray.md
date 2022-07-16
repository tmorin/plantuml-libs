# Jfrogbintray


```text
simpleicons-7/J/Jfrogbintray
```

```text
include('simpleicons-7/J/Jfrogbintray')
```



| Illustration | Jfrogbintray |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/J/Jfrogbintray.png) | ![illustration for Jfrogbintray](../../simpleicons-7/J/Jfrogbintray.Local.png) |




## Jfrogbintray

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Jfrogbintray
include('simpleicons-7/J/Jfrogbintray')

' renders the element
Jfrogbintray('Jfrogbintray', 'Jfrogbintray', 'an optional tech label')
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

' loads the Item which embeds the element Jfrogbintray
include('simpleicons-7/J/Jfrogbintray')

' renders the element
Jfrogbintray('Jfrogbintray', 'Jfrogbintray', 'an optional tech label')
@enduml
```

