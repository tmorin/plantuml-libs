# Reebok


```text
simpleicons-14/R/Reebok
```

```text
include('simpleicons-14/R/Reebok')
```



| Illustration | Reebok |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Reebok.png) | ![illustration for Reebok](../../simpleicons-14/R/Reebok.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ReebokXs>`
- `<$ReebokSm>`
- `<$ReebokMd>`
- `<$ReebokLg>`





## Reebok

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Reebok
include('simpleicons-14/R/Reebok')

' renders the element
Reebok('Reebok', 'Reebok', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Reebok
include('simpleicons-14/R/Reebok')

' renders the element
Reebok('Reebok', 'Reebok', 'an optional tech label', 'an optional description')
@enduml
```

