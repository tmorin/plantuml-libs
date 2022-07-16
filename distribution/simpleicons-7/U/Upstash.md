# Upstash


```text
simpleicons-7/U/Upstash
```

```text
include('simpleicons-7/U/Upstash')
```



| Illustration | Upstash |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/U/Upstash.png) | ![illustration for Upstash](../../simpleicons-7/U/Upstash.Local.png) |




## Upstash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Upstash
include('simpleicons-7/U/Upstash')

' renders the element
Upstash('Upstash', 'Upstash', 'an optional tech label')
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

' loads the Item which embeds the element Upstash
include('simpleicons-7/U/Upstash')

' renders the element
Upstash('Upstash', 'Upstash', 'an optional tech label')
@enduml
```

