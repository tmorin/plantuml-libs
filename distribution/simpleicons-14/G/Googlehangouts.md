# Googlehangouts


```text
simpleicons-14/G/Googlehangouts
```

```text
include('simpleicons-14/G/Googlehangouts')
```



| Illustration | Googlehangouts |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Googlehangouts.png) | ![illustration for Googlehangouts](../../simpleicons-14/G/Googlehangouts.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GooglehangoutsXs>`
- `<$GooglehangoutsSm>`
- `<$GooglehangoutsMd>`
- `<$GooglehangoutsLg>`





## Googlehangouts

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Googlehangouts
include('simpleicons-14/G/Googlehangouts')

' renders the element
Googlehangouts('Googlehangouts', 'Googlehangouts', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googlehangouts
include('simpleicons-14/G/Googlehangouts')

' renders the element
Googlehangouts('Googlehangouts', 'Googlehangouts', 'an optional tech label', 'an optional description')
@enduml
```

