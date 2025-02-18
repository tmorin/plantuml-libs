# Tacobell


```text
simpleicons-14/T/Tacobell
```

```text
include('simpleicons-14/T/Tacobell')
```



| Illustration | Tacobell |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Tacobell.png) | ![illustration for Tacobell](../../simpleicons-14/T/Tacobell.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TacobellXs>`
- `<$TacobellSm>`
- `<$TacobellMd>`
- `<$TacobellLg>`





## Tacobell

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Tacobell
include('simpleicons-14/T/Tacobell')

' renders the element
Tacobell('Tacobell', 'Tacobell', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tacobell
include('simpleicons-14/T/Tacobell')

' renders the element
Tacobell('Tacobell', 'Tacobell', 'an optional tech label', 'an optional description')
@enduml
```

