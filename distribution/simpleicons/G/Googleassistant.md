# Googleassistant


```text
simpleicons/G/Googleassistant
```

```text
include('simpleicons/G/Googleassistant')
```



| Illustration | Googleassistant |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Googleassistant.png) | ![illustration for Googleassistant](../../simpleicons/G/Googleassistant.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GoogleassistantXs>`
- `<$GoogleassistantSm>`
- `<$GoogleassistantMd>`
- `<$GoogleassistantLg>`





## Googleassistant

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Googleassistant
include('simpleicons/G/Googleassistant')

' renders the element
Googleassistant('Googleassistant', 'Googleassistant', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googleassistant
include('simpleicons/G/Googleassistant')

' renders the element
Googleassistant('Googleassistant', 'Googleassistant', 'an optional tech label', 'an optional description')
@enduml
```

