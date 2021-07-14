# Googlechat


```text
simpleicons-5/G/Googlechat
```

```text
include('simpleicons-5/G/Googlechat')
```



| Illustration | Googlechat |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Googlechat.png) | ![illustration for Googlechat](../../simpleicons-5/G/Googlechat.Local.png) |




## Googlechat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Googlechat
include('simpleicons-5/G/Googlechat')

' renders the element
Googlechat('Googlechat', 'Googlechat', 'an optional tech label')
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

' loads the Item which embeds the element Googlechat
include('simpleicons-5/G/Googlechat')

' renders the element
Googlechat('Googlechat', 'Googlechat', 'an optional tech label')
@enduml
```

