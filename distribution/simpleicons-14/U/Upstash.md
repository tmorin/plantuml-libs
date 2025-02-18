# Upstash


```text
simpleicons-14/U/Upstash
```

```text
include('simpleicons-14/U/Upstash')
```



| Illustration | Upstash |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/U/Upstash.png) | ![illustration for Upstash](../../simpleicons-14/U/Upstash.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UpstashXs>`
- `<$UpstashSm>`
- `<$UpstashMd>`
- `<$UpstashLg>`





## Upstash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Upstash
include('simpleicons-14/U/Upstash')

' renders the element
Upstash('Upstash', 'Upstash', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Upstash
include('simpleicons-14/U/Upstash')

' renders the element
Upstash('Upstash', 'Upstash', 'an optional tech label', 'an optional description')
@enduml
```

