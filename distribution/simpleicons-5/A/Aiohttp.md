# Aiohttp


```text
simpleicons-5/A/Aiohttp
```

```text
include('simpleicons-5/A/Aiohttp')
```



| Illustration | Aiohttp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Aiohttp.png) | ![illustration for Aiohttp](../../simpleicons-5/A/Aiohttp.Local.png) |




## Aiohttp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Aiohttp
include('simpleicons-5/A/Aiohttp')

' renders the element
Aiohttp('Aiohttp', 'Aiohttp', 'an optional tech label')
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

' loads the Item which embeds the element Aiohttp
include('simpleicons-5/A/Aiohttp')

' renders the element
Aiohttp('Aiohttp', 'Aiohttp', 'an optional tech label')
@enduml
```

