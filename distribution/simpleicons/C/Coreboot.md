# Coreboot


```text
simpleicons/C/Coreboot
```

```text
include('simpleicons/C/Coreboot')
```



| Illustration | Coreboot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Coreboot.png) | ![illustration for Coreboot](../../simpleicons/C/Coreboot.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CorebootXs>`
- `<$CorebootSm>`
- `<$CorebootMd>`
- `<$CorebootLg>`





## Coreboot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Coreboot
include('simpleicons/C/Coreboot')

' renders the element
Coreboot('Coreboot', 'Coreboot', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Coreboot
include('simpleicons/C/Coreboot')

' renders the element
Coreboot('Coreboot', 'Coreboot', 'an optional tech label', 'an optional description')
@enduml
```

