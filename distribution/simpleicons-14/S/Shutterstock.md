# Shutterstock


```text
simpleicons-14/S/Shutterstock
```

```text
include('simpleicons-14/S/Shutterstock')
```



| Illustration | Shutterstock |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Shutterstock.png) | ![illustration for Shutterstock](../../simpleicons-14/S/Shutterstock.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ShutterstockXs>`
- `<$ShutterstockSm>`
- `<$ShutterstockMd>`
- `<$ShutterstockLg>`





## Shutterstock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Shutterstock
include('simpleicons-14/S/Shutterstock')

' renders the element
Shutterstock('Shutterstock', 'Shutterstock', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Shutterstock
include('simpleicons-14/S/Shutterstock')

' renders the element
Shutterstock('Shutterstock', 'Shutterstock', 'an optional tech label', 'an optional description')
@enduml
```

