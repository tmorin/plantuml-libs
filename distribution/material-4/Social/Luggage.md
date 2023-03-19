# Luggage


```text
material-4/Social/Luggage
```

```text
include('material-4/Social/Luggage')
```



| Illustration | Luggage |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/Luggage.png) | ![illustration for Luggage](../../material-4/Social/Luggage.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LuggageXs>`
- `<$LuggageSm>`
- `<$LuggageMd>`
- `<$LuggageLg>`





## Luggage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Luggage
include('material-4/Social/Luggage')

' renders the element
Luggage('Luggage', 'Luggage', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Luggage
include('material-4/Social/Luggage')

' renders the element
Luggage('Luggage', 'Luggage', 'an optional tech label', 'an optional description')
@enduml
```

