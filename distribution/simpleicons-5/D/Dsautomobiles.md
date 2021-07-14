# Dsautomobiles


```text
simpleicons-5/D/Dsautomobiles
```

```text
include('simpleicons-5/D/Dsautomobiles')
```



| Illustration | Dsautomobiles |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Dsautomobiles.png) | ![illustration for Dsautomobiles](../../simpleicons-5/D/Dsautomobiles.Local.png) |




## Dsautomobiles

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Dsautomobiles
include('simpleicons-5/D/Dsautomobiles')

' renders the element
Dsautomobiles('Dsautomobiles', 'Dsautomobiles', 'an optional tech label')
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

' loads the Item which embeds the element Dsautomobiles
include('simpleicons-5/D/Dsautomobiles')

' renders the element
Dsautomobiles('Dsautomobiles', 'Dsautomobiles', 'an optional tech label')
@enduml
```

