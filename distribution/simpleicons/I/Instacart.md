# Instacart


```text
simpleicons/I/Instacart
```

```text
include('simpleicons/I/Instacart')
```



| Illustration | Instacart |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/I/Instacart.png) | ![illustration for Instacart](../../simpleicons/I/Instacart.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InstacartXs>`
- `<$InstacartSm>`
- `<$InstacartMd>`
- `<$InstacartLg>`





## Instacart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Instacart
include('simpleicons/I/Instacart')

' renders the element
Instacart('Instacart', 'Instacart', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Instacart
include('simpleicons/I/Instacart')

' renders the element
Instacart('Instacart', 'Instacart', 'an optional tech label', 'an optional description')
@enduml
```

