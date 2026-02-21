# Googlejules


```text
simpleicons-14/G/Googlejules
```

```text
include('simpleicons-14/G/Googlejules')
```



| Illustration | Googlejules |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Googlejules.png) | ![illustration for Googlejules](../../simpleicons-14/G/Googlejules.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GooglejulesXs>`
- `<$GooglejulesSm>`
- `<$GooglejulesMd>`
- `<$GooglejulesLg>`





## Googlejules

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Googlejules
include('simpleicons-14/G/Googlejules')

' renders the element
Googlejules('Googlejules', 'Googlejules', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googlejules
include('simpleicons-14/G/Googlejules')

' renders the element
Googlejules('Googlejules', 'Googlejules', 'an optional tech label', 'an optional description')
@enduml
```

