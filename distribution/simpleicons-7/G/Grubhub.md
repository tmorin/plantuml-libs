# Grubhub


```text
simpleicons-7/G/Grubhub
```

```text
include('simpleicons-7/G/Grubhub')
```



| Illustration | Grubhub |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/G/Grubhub.png) | ![illustration for Grubhub](../../simpleicons-7/G/Grubhub.Local.png) |




## Grubhub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Grubhub
include('simpleicons-7/G/Grubhub')

' renders the element
Grubhub('Grubhub', 'Grubhub', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Grubhub
include('simpleicons-7/G/Grubhub')

' renders the element
Grubhub('Grubhub', 'Grubhub', 'an optional tech label', 'an optional description')
@enduml
```

