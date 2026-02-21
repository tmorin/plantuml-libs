# Grocy


```text
simpleicons/G/Grocy
```

```text
include('simpleicons/G/Grocy')
```



| Illustration | Grocy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Grocy.png) | ![illustration for Grocy](../../simpleicons/G/Grocy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GrocyXs>`
- `<$GrocySm>`
- `<$GrocyMd>`
- `<$GrocyLg>`





## Grocy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Grocy
include('simpleicons/G/Grocy')

' renders the element
Grocy('Grocy', 'Grocy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Grocy
include('simpleicons/G/Grocy')

' renders the element
Grocy('Grocy', 'Grocy', 'an optional tech label', 'an optional description')
@enduml
```

