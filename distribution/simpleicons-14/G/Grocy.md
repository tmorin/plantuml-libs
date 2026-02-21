# Grocy


```text
simpleicons-14/G/Grocy
```

```text
include('simpleicons-14/G/Grocy')
```



| Illustration | Grocy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Grocy.png) | ![illustration for Grocy](../../simpleicons-14/G/Grocy.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Grocy
include('simpleicons-14/G/Grocy')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Grocy
include('simpleicons-14/G/Grocy')

' renders the element
Grocy('Grocy', 'Grocy', 'an optional tech label', 'an optional description')
@enduml
```

