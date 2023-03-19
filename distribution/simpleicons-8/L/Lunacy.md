# Lunacy


```text
simpleicons-8/L/Lunacy
```

```text
include('simpleicons-8/L/Lunacy')
```



| Illustration | Lunacy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/L/Lunacy.png) | ![illustration for Lunacy](../../simpleicons-8/L/Lunacy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LunacyXs>`
- `<$LunacySm>`
- `<$LunacyMd>`
- `<$LunacyLg>`





## Lunacy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Lunacy
include('simpleicons-8/L/Lunacy')

' renders the element
Lunacy('Lunacy', 'Lunacy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lunacy
include('simpleicons-8/L/Lunacy')

' renders the element
Lunacy('Lunacy', 'Lunacy', 'an optional tech label', 'an optional description')
@enduml
```

