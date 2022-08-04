# Googlechat


```text
simpleicons-7/G/Googlechat
```

```text
include('simpleicons-7/G/Googlechat')
```



| Illustration | Googlechat |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/G/Googlechat.png) | ![illustration for Googlechat](../../simpleicons-7/G/Googlechat.Local.png) |




## Googlechat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Googlechat
include('simpleicons-7/G/Googlechat')

' renders the element
Googlechat('Googlechat', 'Googlechat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googlechat
include('simpleicons-7/G/Googlechat')

' renders the element
Googlechat('Googlechat', 'Googlechat', 'an optional tech label', 'an optional description')
@enduml
```

