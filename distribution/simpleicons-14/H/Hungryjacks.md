# Hungryjacks


```text
simpleicons-14/H/Hungryjacks
```

```text
include('simpleicons-14/H/Hungryjacks')
```



| Illustration | Hungryjacks |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Hungryjacks.png) | ![illustration for Hungryjacks](../../simpleicons-14/H/Hungryjacks.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HungryjacksXs>`
- `<$HungryjacksSm>`
- `<$HungryjacksMd>`
- `<$HungryjacksLg>`





## Hungryjacks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Hungryjacks
include('simpleicons-14/H/Hungryjacks')

' renders the element
Hungryjacks('Hungryjacks', 'Hungryjacks', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hungryjacks
include('simpleicons-14/H/Hungryjacks')

' renders the element
Hungryjacks('Hungryjacks', 'Hungryjacks', 'an optional tech label', 'an optional description')
@enduml
```

