# Shenzhenmetro


```text
simpleicons-14/S/Shenzhenmetro
```

```text
include('simpleicons-14/S/Shenzhenmetro')
```



| Illustration | Shenzhenmetro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Shenzhenmetro.png) | ![illustration for Shenzhenmetro](../../simpleicons-14/S/Shenzhenmetro.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ShenzhenmetroXs>`
- `<$ShenzhenmetroSm>`
- `<$ShenzhenmetroMd>`
- `<$ShenzhenmetroLg>`





## Shenzhenmetro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Shenzhenmetro
include('simpleicons-14/S/Shenzhenmetro')

' renders the element
Shenzhenmetro('Shenzhenmetro', 'Shenzhenmetro', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Shenzhenmetro
include('simpleicons-14/S/Shenzhenmetro')

' renders the element
Shenzhenmetro('Shenzhenmetro', 'Shenzhenmetro', 'an optional tech label', 'an optional description')
@enduml
```

