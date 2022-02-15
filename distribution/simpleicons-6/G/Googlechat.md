# Googlechat


```text
simpleicons-6/G/Googlechat
```

```text
include('simpleicons-6/G/Googlechat')
```



| Illustration | Googlechat |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Googlechat.png) | ![illustration for Googlechat](../../simpleicons-6/G/Googlechat.Local.png) |




## Googlechat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Googlechat
include('simpleicons-6/G/Googlechat')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Googlechat
include('simpleicons-6/G/Googlechat')

' renders the element
Googlechat('Googlechat', 'Googlechat', 'an optional tech label')
@enduml
```

