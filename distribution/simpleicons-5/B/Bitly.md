# Bitly


```text
simpleicons-5/B/Bitly
```

```text
include('simpleicons-5/B/Bitly')
```



| Illustration | Bitly |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Bitly.png) | ![illustration for Bitly](../../simpleicons-5/B/Bitly.Local.png) |




## Bitly

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Bitly
include('simpleicons-5/B/Bitly')

' renders the element
Bitly('Bitly', 'Bitly', 'an optional tech label')
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

' loads the Item which embeds the element Bitly
include('simpleicons-5/B/Bitly')

' renders the element
Bitly('Bitly', 'Bitly', 'an optional tech label')
@enduml
```

