# Homeassistant


```text
simpleicons-8/H/Homeassistant
```

```text
include('simpleicons-8/H/Homeassistant')
```



| Illustration | Homeassistant |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/H/Homeassistant.png) | ![illustration for Homeassistant](../../simpleicons-8/H/Homeassistant.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HomeassistantXs>`
- `<$HomeassistantSm>`
- `<$HomeassistantMd>`
- `<$HomeassistantLg>`





## Homeassistant

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Homeassistant
include('simpleicons-8/H/Homeassistant')

' renders the element
Homeassistant('Homeassistant', 'Homeassistant', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Homeassistant
include('simpleicons-8/H/Homeassistant')

' renders the element
Homeassistant('Homeassistant', 'Homeassistant', 'an optional tech label', 'an optional description')
@enduml
```

