# Conekta


```text
simpleicons-14/C/Conekta
```

```text
include('simpleicons-14/C/Conekta')
```



| Illustration | Conekta |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Conekta.png) | ![illustration for Conekta](../../simpleicons-14/C/Conekta.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ConektaXs>`
- `<$ConektaSm>`
- `<$ConektaMd>`
- `<$ConektaLg>`





## Conekta

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Conekta
include('simpleicons-14/C/Conekta')

' renders the element
Conekta('Conekta', 'Conekta', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Conekta
include('simpleicons-14/C/Conekta')

' renders the element
Conekta('Conekta', 'Conekta', 'an optional tech label', 'an optional description')
@enduml
```

