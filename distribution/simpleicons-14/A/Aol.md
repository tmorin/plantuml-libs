# Aol


```text
simpleicons-14/A/Aol
```

```text
include('simpleicons-14/A/Aol')
```



| Illustration | Aol |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Aol.png) | ![illustration for Aol](../../simpleicons-14/A/Aol.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AolXs>`
- `<$AolSm>`
- `<$AolMd>`
- `<$AolLg>`





## Aol

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Aol
include('simpleicons-14/A/Aol')

' renders the element
Aol('Aol', 'Aol', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Aol
include('simpleicons-14/A/Aol')

' renders the element
Aol('Aol', 'Aol', 'an optional tech label', 'an optional description')
@enduml
```

