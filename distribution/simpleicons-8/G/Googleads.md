# Googleads


```text
simpleicons-8/G/Googleads
```

```text
include('simpleicons-8/G/Googleads')
```



| Illustration | Googleads |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/G/Googleads.png) | ![illustration for Googleads](../../simpleicons-8/G/Googleads.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GoogleadsXs>`
- `<$GoogleadsSm>`
- `<$GoogleadsMd>`
- `<$GoogleadsLg>`





## Googleads

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Googleads
include('simpleicons-8/G/Googleads')

' renders the element
Googleads('Googleads', 'Googleads', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Googleads
include('simpleicons-8/G/Googleads')

' renders the element
Googleads('Googleads', 'Googleads', 'an optional tech label', 'an optional description')
@enduml
```

