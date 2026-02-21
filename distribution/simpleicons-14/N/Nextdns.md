# Nextdns


```text
simpleicons-14/N/Nextdns
```

```text
include('simpleicons-14/N/Nextdns')
```



| Illustration | Nextdns |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Nextdns.png) | ![illustration for Nextdns](../../simpleicons-14/N/Nextdns.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NextdnsXs>`
- `<$NextdnsSm>`
- `<$NextdnsMd>`
- `<$NextdnsLg>`





## Nextdns

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Nextdns
include('simpleicons-14/N/Nextdns')

' renders the element
Nextdns('Nextdns', 'Nextdns', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nextdns
include('simpleicons-14/N/Nextdns')

' renders the element
Nextdns('Nextdns', 'Nextdns', 'an optional tech label', 'an optional description')
@enduml
```

