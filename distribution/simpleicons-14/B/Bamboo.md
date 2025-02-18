# Bamboo


```text
simpleicons-14/B/Bamboo
```

```text
include('simpleicons-14/B/Bamboo')
```



| Illustration | Bamboo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Bamboo.png) | ![illustration for Bamboo](../../simpleicons-14/B/Bamboo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BambooXs>`
- `<$BambooSm>`
- `<$BambooMd>`
- `<$BambooLg>`





## Bamboo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Bamboo
include('simpleicons-14/B/Bamboo')

' renders the element
Bamboo('Bamboo', 'Bamboo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bamboo
include('simpleicons-14/B/Bamboo')

' renders the element
Bamboo('Bamboo', 'Bamboo', 'an optional tech label', 'an optional description')
@enduml
```

