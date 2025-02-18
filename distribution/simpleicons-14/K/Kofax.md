# Kofax


```text
simpleicons-14/K/Kofax
```

```text
include('simpleicons-14/K/Kofax')
```



| Illustration | Kofax |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/K/Kofax.png) | ![illustration for Kofax](../../simpleicons-14/K/Kofax.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KofaxXs>`
- `<$KofaxSm>`
- `<$KofaxMd>`
- `<$KofaxLg>`





## Kofax

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Kofax
include('simpleicons-14/K/Kofax')

' renders the element
Kofax('Kofax', 'Kofax', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kofax
include('simpleicons-14/K/Kofax')

' renders the element
Kofax('Kofax', 'Kofax', 'an optional tech label', 'an optional description')
@enduml
```

