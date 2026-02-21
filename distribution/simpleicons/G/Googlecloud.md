# Googlecloud


```text
simpleicons/G/Googlecloud
```

```text
include('simpleicons/G/Googlecloud')
```



| Illustration | Googlecloud |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Googlecloud.png) | ![illustration for Googlecloud](../../simpleicons/G/Googlecloud.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GooglecloudXs>`
- `<$GooglecloudSm>`
- `<$GooglecloudMd>`
- `<$GooglecloudLg>`





## Googlecloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Googlecloud
include('simpleicons/G/Googlecloud')

' renders the element
Googlecloud('Googlecloud', 'Googlecloud', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Googlecloud
include('simpleicons/G/Googlecloud')

' renders the element
Googlecloud('Googlecloud', 'Googlecloud', 'an optional tech label', 'an optional description')
@enduml
```

