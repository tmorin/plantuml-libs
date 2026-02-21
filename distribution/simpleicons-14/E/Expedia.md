# Expedia


```text
simpleicons-14/E/Expedia
```

```text
include('simpleicons-14/E/Expedia')
```



| Illustration | Expedia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Expedia.png) | ![illustration for Expedia](../../simpleicons-14/E/Expedia.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ExpediaXs>`
- `<$ExpediaSm>`
- `<$ExpediaMd>`
- `<$ExpediaLg>`





## Expedia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Expedia
include('simpleicons-14/E/Expedia')

' renders the element
Expedia('Expedia', 'Expedia', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Expedia
include('simpleicons-14/E/Expedia')

' renders the element
Expedia('Expedia', 'Expedia', 'an optional tech label', 'an optional description')
@enduml
```

