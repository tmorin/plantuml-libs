# Guilded


```text
simpleicons-14/G/Guilded
```

```text
include('simpleicons-14/G/Guilded')
```



| Illustration | Guilded |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Guilded.png) | ![illustration for Guilded](../../simpleicons-14/G/Guilded.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GuildedXs>`
- `<$GuildedSm>`
- `<$GuildedMd>`
- `<$GuildedLg>`





## Guilded

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Guilded
include('simpleicons-14/G/Guilded')

' renders the element
Guilded('Guilded', 'Guilded', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Guilded
include('simpleicons-14/G/Guilded')

' renders the element
Guilded('Guilded', 'Guilded', 'an optional tech label', 'an optional description')
@enduml
```

