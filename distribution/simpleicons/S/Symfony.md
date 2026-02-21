# Symfony


```text
simpleicons/S/Symfony
```

```text
include('simpleicons/S/Symfony')
```



| Illustration | Symfony |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Symfony.png) | ![illustration for Symfony](../../simpleicons/S/Symfony.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SymfonyXs>`
- `<$SymfonySm>`
- `<$SymfonyMd>`
- `<$SymfonyLg>`





## Symfony

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Symfony
include('simpleicons/S/Symfony')

' renders the element
Symfony('Symfony', 'Symfony', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Symfony
include('simpleicons/S/Symfony')

' renders the element
Symfony('Symfony', 'Symfony', 'an optional tech label', 'an optional description')
@enduml
```

