# Tresorit


```text
simpleicons-14/T/Tresorit
```

```text
include('simpleicons-14/T/Tresorit')
```



| Illustration | Tresorit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Tresorit.png) | ![illustration for Tresorit](../../simpleicons-14/T/Tresorit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TresoritXs>`
- `<$TresoritSm>`
- `<$TresoritMd>`
- `<$TresoritLg>`





## Tresorit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Tresorit
include('simpleicons-14/T/Tresorit')

' renders the element
Tresorit('Tresorit', 'Tresorit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tresorit
include('simpleicons-14/T/Tresorit')

' renders the element
Tresorit('Tresorit', 'Tresorit', 'an optional tech label', 'an optional description')
@enduml
```

