# Guangzhoumetro


```text
simpleicons/G/Guangzhoumetro
```

```text
include('simpleicons/G/Guangzhoumetro')
```



| Illustration | Guangzhoumetro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Guangzhoumetro.png) | ![illustration for Guangzhoumetro](../../simpleicons/G/Guangzhoumetro.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GuangzhoumetroXs>`
- `<$GuangzhoumetroSm>`
- `<$GuangzhoumetroMd>`
- `<$GuangzhoumetroLg>`





## Guangzhoumetro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Guangzhoumetro
include('simpleicons/G/Guangzhoumetro')

' renders the element
Guangzhoumetro('Guangzhoumetro', 'Guangzhoumetro', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Guangzhoumetro
include('simpleicons/G/Guangzhoumetro')

' renders the element
Guangzhoumetro('Guangzhoumetro', 'Guangzhoumetro', 'an optional tech label', 'an optional description')
@enduml
```

