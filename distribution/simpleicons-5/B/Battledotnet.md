# Battledotnet


```text
simpleicons-5/B/Battledotnet
```

```text
include('simpleicons-5/B/Battledotnet')
```



| Illustration | Battledotnet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Battledotnet.png) | ![illustration for Battledotnet](../../simpleicons-5/B/Battledotnet.Local.png) |




## Battledotnet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Battledotnet
include('simpleicons-5/B/Battledotnet')

' renders the element
Battledotnet('Battledotnet', 'Battledotnet', 'an optional tech label')
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

' loads the Item which embeds the element Battledotnet
include('simpleicons-5/B/Battledotnet')

' renders the element
Battledotnet('Battledotnet', 'Battledotnet', 'an optional tech label')
@enduml
```

