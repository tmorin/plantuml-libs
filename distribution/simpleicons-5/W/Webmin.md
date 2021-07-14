# Webmin


```text
simpleicons-5/W/Webmin
```

```text
include('simpleicons-5/W/Webmin')
```



| Illustration | Webmin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/W/Webmin.png) | ![illustration for Webmin](../../simpleicons-5/W/Webmin.Local.png) |




## Webmin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Webmin
include('simpleicons-5/W/Webmin')

' renders the element
Webmin('Webmin', 'Webmin', 'an optional tech label')
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

' loads the Item which embeds the element Webmin
include('simpleicons-5/W/Webmin')

' renders the element
Webmin('Webmin', 'Webmin', 'an optional tech label')
@enduml
```

