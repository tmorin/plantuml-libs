# Transportforlondon


```text
simpleicons-5/T/Transportforlondon
```

```text
include('simpleicons-5/T/Transportforlondon')
```



| Illustration | Transportforlondon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Transportforlondon.png) | ![illustration for Transportforlondon](../../simpleicons-5/T/Transportforlondon.Local.png) |




## Transportforlondon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Transportforlondon
include('simpleicons-5/T/Transportforlondon')

' renders the element
Transportforlondon('Transportforlondon', 'Transportforlondon', 'an optional tech label')
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

' loads the Item which embeds the element Transportforlondon
include('simpleicons-5/T/Transportforlondon')

' renders the element
Transportforlondon('Transportforlondon', 'Transportforlondon', 'an optional tech label')
@enduml
```

