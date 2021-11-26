# Googlechrome


```text
simpleicons-5/G/Googlechrome
```

```text
include('simpleicons-5/G/Googlechrome')
```



| Illustration | Googlechrome |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Googlechrome.png) | ![illustration for Googlechrome](../../simpleicons-5/G/Googlechrome.Local.png) |




## Googlechrome

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Googlechrome
include('simpleicons-5/G/Googlechrome')

' renders the element
Googlechrome('Googlechrome', 'Googlechrome', 'an optional tech label')
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

' loads the Item which embeds the element Googlechrome
include('simpleicons-5/G/Googlechrome')

' renders the element
Googlechrome('Googlechrome', 'Googlechrome', 'an optional tech label')
@enduml
```

