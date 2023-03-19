# Altiumdesigner


```text
simpleicons-8/A/Altiumdesigner
```

```text
include('simpleicons-8/A/Altiumdesigner')
```



| Illustration | Altiumdesigner |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Altiumdesigner.png) | ![illustration for Altiumdesigner](../../simpleicons-8/A/Altiumdesigner.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AltiumdesignerXs>`
- `<$AltiumdesignerSm>`
- `<$AltiumdesignerMd>`
- `<$AltiumdesignerLg>`





## Altiumdesigner

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Altiumdesigner
include('simpleicons-8/A/Altiumdesigner')

' renders the element
Altiumdesigner('Altiumdesigner', 'Altiumdesigner', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Altiumdesigner
include('simpleicons-8/A/Altiumdesigner')

' renders the element
Altiumdesigner('Altiumdesigner', 'Altiumdesigner', 'an optional tech label', 'an optional description')
@enduml
```

