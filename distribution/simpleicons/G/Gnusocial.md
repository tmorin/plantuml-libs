# Gnusocial


```text
simpleicons/G/Gnusocial
```

```text
include('simpleicons/G/Gnusocial')
```



| Illustration | Gnusocial |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Gnusocial.png) | ![illustration for Gnusocial](../../simpleicons/G/Gnusocial.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GnusocialXs>`
- `<$GnusocialSm>`
- `<$GnusocialMd>`
- `<$GnusocialLg>`





## Gnusocial

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Gnusocial
include('simpleicons/G/Gnusocial')

' renders the element
Gnusocial('Gnusocial', 'Gnusocial', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gnusocial
include('simpleicons/G/Gnusocial')

' renders the element
Gnusocial('Gnusocial', 'Gnusocial', 'an optional tech label', 'an optional description')
@enduml
```

