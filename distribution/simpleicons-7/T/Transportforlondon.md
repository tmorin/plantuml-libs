# Transportforlondon


```text
simpleicons-7/T/Transportforlondon
```

```text
include('simpleicons-7/T/Transportforlondon')
```



| Illustration | Transportforlondon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Transportforlondon.png) | ![illustration for Transportforlondon](../../simpleicons-7/T/Transportforlondon.Local.png) |




## Transportforlondon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Transportforlondon
include('simpleicons-7/T/Transportforlondon')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Transportforlondon
include('simpleicons-7/T/Transportforlondon')

' renders the element
Transportforlondon('Transportforlondon', 'Transportforlondon', 'an optional tech label')
@enduml
```

