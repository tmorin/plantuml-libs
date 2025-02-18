# Exoscale


```text
simpleicons-14/E/Exoscale
```

```text
include('simpleicons-14/E/Exoscale')
```



| Illustration | Exoscale |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Exoscale.png) | ![illustration for Exoscale](../../simpleicons-14/E/Exoscale.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ExoscaleXs>`
- `<$ExoscaleSm>`
- `<$ExoscaleMd>`
- `<$ExoscaleLg>`





## Exoscale

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Exoscale
include('simpleicons-14/E/Exoscale')

' renders the element
Exoscale('Exoscale', 'Exoscale', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Exoscale
include('simpleicons-14/E/Exoscale')

' renders the element
Exoscale('Exoscale', 'Exoscale', 'an optional tech label', 'an optional description')
@enduml
```

