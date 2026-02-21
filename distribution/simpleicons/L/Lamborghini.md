# Lamborghini


```text
simpleicons/L/Lamborghini
```

```text
include('simpleicons/L/Lamborghini')
```



| Illustration | Lamborghini |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Lamborghini.png) | ![illustration for Lamborghini](../../simpleicons/L/Lamborghini.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LamborghiniXs>`
- `<$LamborghiniSm>`
- `<$LamborghiniMd>`
- `<$LamborghiniLg>`





## Lamborghini

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Lamborghini
include('simpleicons/L/Lamborghini')

' renders the element
Lamborghini('Lamborghini', 'Lamborghini', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lamborghini
include('simpleicons/L/Lamborghini')

' renders the element
Lamborghini('Lamborghini', 'Lamborghini', 'an optional tech label', 'an optional description')
@enduml
```

